/*
* It create a simple chart option, to create a chart pie, columns
* By Passing a value it change it, into another chart
*/
(function($, undefined){

    
    "use strict";
    
	var progname = "[srchart] ";

	$.widget( "sr.srchart", {
        
        options: {
            context : "/TestChris",
            prefix  : "sr_",
            chart_type : undefined, // default to column chart
            debug   : false,
            data    : []
        },
        
        _create: function() {
            var self = this;
            if (self.options.debug) { console.log(progname + '_create'); }
        },
        
        _init: function() {
            var self = this;
            if (self.options.debug) { console.log(progname + '_init'); }
            self.plot();
        },
        
		plot: function() {
            var self = this;
            if (self.options.debug) { console.log(progname + 'plot'); }

            var chartOptions = {
                chart: {
                    renderTo: self.element[0],
                    type: self.options.chart_type
                },
                title: {
                    text: 'Company Chart'
                }
            };
            
            if (self.options.chart_type === 'column') {
                chartOptions.xAxis = {
                    categories: self.options.data.map(function(item) {
                        return item.category;
                    })
                };
                chartOptions.yAxis = {
                    title: {
                        text: 'Values'
                    }
                };
                chartOptions.series = [{
                    name: 'Data',
                    data: self.options.data.map(function(item) {
                        return item.value;
                    })
                }];
            } else if (self.options.chart_type === 'pie') {
                chartOptions.series = [{
                    name: 'Data',
                    colorByPoint: true,
                    data: self.options.data.map(function(item) {
                        return {
                            name: item.category,
                            y: item.value
                        };
                    })
                }];
            }

            Highcharts.chart(chartOptions);
        },
        
        updateData: function(newData) {
            var self = this;
            self.options.data = newData;
            self.plot();
        }
        
    });
    
}(jQuery));
        
