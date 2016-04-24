/// <reference path="../../../../typings/browser.d.ts" />

import {it, describe, expect} from "angular2/testing";

import { Employee } from './../../../app/model/employee';

describe('Tests for Employee Model', () => {
    let employee;

    beforeEach(function() {
        employee = new Employee(1, 'Hoang Bao');
    });

    it('should have name as assigned',() => {
        expect(employee.name).toEqual('Hoang Bao');
    });

    it('should have id as assigned',() => {
        expect(employee.id).toEqual(1);
    });

});