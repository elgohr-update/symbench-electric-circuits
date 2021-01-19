/*globals define, _*/

/**
 * Generated by DecoratorGenerator
 */

define([
    'js/Decorators/DecoratorBase',
    './DiagramDesigner/ElectricCircuitsDecorator.DiagramDesignerWidget',
    './PartBrowser/ElectricCircuitsDecorator.PartBrowserWidget'
], function (
    DecoratorBase,
    ElectricCircuitsDecoratorDiagramDesignerWidget,
    ElectricCircuitsDecoratorPartBrowserWidget
) {
    'use strict';

    const DECORATOR_ID = 'ElectricCircuitsDecorator';

    function ElectricCircuitsDecorator(params) {
        const opts = _.extend({loggerName: this.DECORATORID}, params);

        DecoratorBase.apply(this, [opts]);

        this.logger.debug('ElectricCircuitsDecorator ctor');
    }

    _.extend(ElectricCircuitsDecorator.prototype, DecoratorBase.prototype);
    ElectricCircuitsDecorator.prototype.DECORATORID = DECORATOR_ID;

    /*********************** OVERRIDE DecoratorBase MEMBERS **************************/

    ElectricCircuitsDecorator.prototype.initializeSupportedWidgetMap = function () {
        this.supportedWidgetMap = {
            DiagramDesigner: ElectricCircuitsDecoratorDiagramDesignerWidget,
            PartBrowser: ElectricCircuitsDecoratorPartBrowserWidget
        };
    };

    return ElectricCircuitsDecorator;
});