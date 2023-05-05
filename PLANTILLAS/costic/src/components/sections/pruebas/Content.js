import React, { Component } from 'react';
import $ from 'jquery';
import SelectMultiple from './select';

class Content extends Component {
    componentDidMount() {
        //initialize datatable
        function animateRoundedProgress(rpb) {
            if (!$(rpb).hasClass('animated')) {
                $(rpb).css('stroke-dashoffset', 358.141563 - (358.141563 / 100) * $(rpb).attr('aria-valuenow'));
                $(rpb).addClass('animated');
            }
        }
        function initRoundedProgress() {
            var roundedProgress = $('.progress-cicle');
            roundedProgress.each(function () {
                animateRoundedProgress(this);
            });
        }
        initRoundedProgress()
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <SelectMultiple></SelectMultiple>
            </div>

        );
    }
}

export default Content;