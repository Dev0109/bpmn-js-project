import BpmnViewer from 'bpmn-js';
import BpmnModeler from 'bpmn-js/lib/Modeler';
// import CamundaBpmnModdle from 'camunda-bpmn-moddle/resources/camunda.json'
// import CamundaPlatformPropertiesProviderModule from 'camunda-bpmn-moddle/resources/camunda.json'
import ActivitiBpmnModdle from 'activiti-bpmn-moddle/resources/activiti.json'
import ActivitiExtensionModule from 'activiti-bpmn-moddle/lib'

import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
  CloudElementTemplatesPropertiesProviderModule,
  CloudElementTemplatesValidator,
  ElementTemplatesPropertiesProviderModule,
  ZeebeDescriptionProvider,
  ZeebePropertiesProviderModule
} from 'bpmn-js-properties-panel';

// const modeler = new BpmnModeler({
//   container: '#canvas',
//   propertiesPanel: {
//     parent: '#properties'
//   },
//   additionalModules: [
//     BpmnPropertiesPanelModule,
//     BpmnPropertiesProviderModule,
//     CamundaPlatformPropertiesProviderModule
//   ],
//   moddleExtensions: {
//     camunda: CamundaBpmnModdle.associations,
//     activiti:  ActivitiBpmnModdle
//   }
// });

var modeler = new BpmnModeler({
  container: '#canvas',
  propertiesPanel: {
    parent: '#properties'
  },
  additionalModules: [
    BpmnPropertiesPanelModule,
    BpmnPropertiesProviderModule,
    CamundaPlatformPropertiesProviderModule,
    CloudElementTemplatesPropertiesProviderModule,
    CloudElementTemplatesValidator,
    ElementTemplatesPropertiesProviderModule,
    ZeebeDescriptionProvider,
    ZeebePropertiesProviderModule,
    ActivitiExtensionModule
  ],
  moddleExtensions: {
    activiti: ActivitiBpmnModdle
  }
});


fetch('bpmn/diagramWithActiviti.bpmn').then(response => {
  response.text().then(data => {
    modeler.importXML(data, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Diagram imported');
      }
    });
  });
});

window.saveXML = function(){
  modeler.saveXML(function(err, xml) {
    if (err) {
      console.error('save failed. ', err);
    } else {
      console.log('bpmn content as string :', xml);
      console.log('====================');
      var parser = new DOMParser();
      var xmlDom = parser.parseFromString(xml, 'application/xml');
      console.log('bpmn content as xml :', xmlDom);
    }
  });
}