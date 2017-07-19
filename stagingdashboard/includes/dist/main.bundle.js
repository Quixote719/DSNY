webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.pink{\r\n    background: pink ;\r\n}*/\r\n\r\np{\r\n    font-weight: bold;\r\n}\r\n\r\n.ui-state-default{\r\nbackground: blue;\r\n}\r\n\r\n.ui-datatable .ui-datatable-thead > tr > th {\r\n    background: blue;\r\n}\r\n\r\nth .ui-column-title {\r\n    display: inline !important;\r\n}\r\n\r\n.ui-datatable .ui-datatable-thead > tr > th {\r\n    background: red;\r\n}\r\n\r\n.ui-datatable.myTable th {\r\n    background: red;\r\n}\r\n\r\nth:nth-child(n){\r\n  background: #b7a5e5 !important;\r\n}\r\n\r\nth:nth-child(n+7){\r\n  background: #e0ca8f !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <p-dataTable #dataTable [value]=\"employees\"  [paginator]=\"true\" [rows]=\"25\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[20,30,40]\" [styleClass]=\"myTable\">\r\n        <header >\r\n           <!--<row>\r\n               <div>asdada </div>\r\n               <div>asdada </div>\r\n           </row>-->\r\n            </header> \r\n        <p-column field=\"SRNo\" header=\"Request #\" styleClass=\"pink\" [colspan]=\"1\" [sortable]=\"true\" [style]=\"{'width':'8%'}\">\r\n              <template pTemplate=\"header\" >\r\n                    <p>Request # </p>\r\n                    <input type=\"text\" [(ngModel)]=objSrNo style=\"max-width:100px;align-items:left\" style=\"width:140px\"/>\r\n                    <button (click)= getReport()>Q</button>\r\n                </template>    \r\n        </p-column>\r\n        <p-column field=\"AppointmentDate\" header=\"Appointment Date\" [colspan]=\"1\" [sortable]=\"true\" [style]=\"{'width':'8%'}\">\r\n             <template pTemplate=\"header\" >\r\n                    <p>Appointment Date</p>\r\n                     <div class='input-group date' id='datetimepicker1'>\r\n                        <input type='text' id=\"dtpickupdate\" name=\"pickupdate\" required tabindex=\"2\" maxlength=\"15\" style=\"border: 0px; background-color: #F9F9F9; width: 100%;\" placeholder=\"Select Date\" />\r\n                        <span class=\"input-group-addon\" style=\"border: 0px; background-color: #F9F9F9; padding: 7px; color: #006646\">\r\n                            <span class=\"glyphicon glyphicon-calendar\"></span>\r\n                        </span>\r\n                    </div>\r\n                </template> \r\n        </p-column>\r\n        <p-column field=\"DistrictName\" header=\"District\" [colspan]=\"1\" [sortable]=\"true\" [style]=\"{'width':'6%'}\" styleClass=\"pink\">\r\n                <template pTemplate=\"header\">\r\n                    <p>District</p>\r\n                     <select #dlDistrict type=\"number\" [(ngModel)]=\"distNum\" (change)=setDist(dlDistrict.value) style=\"width:120px\">\r\n                            <option *ngFor=\"let dist of ddlDistricts\" [ngValue]=\"dist\">{{dist}}</option>\r\n                     </select>\r\n                    <!--<select>\r\n                        <option value=\"volvo\">Volvo</option>\r\n                        <option value=\"saab\">Saab</option>\r\n                        <option value=\"mercedes\">Mercedes</option>\r\n                        <option value=\"audi\">Audi</option>\r\n                    </select>-->\r\n                </template> \r\n        </p-column>\r\n        <p-column field=\"TruckSerialNo\" header=\"Equipment\" [colspan]=\"1\" [sortable]=\"true\" [style]=\"{'width':'6%'}\" >\r\n             <template pTemplate=\"header\">\r\n                    <p>Equipment</p>\r\n                    <select #dlEquipment type=\"number\" [(ngModel)]=\"equNum\" (change)=setEqu(dlEquipment.value) style=\"width:120px\">\r\n                            <option *ngFor=\"let equ of ddlEquipments\" [ngValue]=\"equ\">{{equ}}</option>\r\n                     </select>\r\n                </template> \r\n        </p-column>\r\n        <p-column field=\"Status\" header=\"Status\" [colspan]=\"1\" [sortable]=\"true\" [style]=\"{'width':'7%'}\" >     \r\n             <template pTemplate=\"header\">\r\n                    <p>Status</p>\r\n                     <select #dlStatus type=\"number\" [(ngModel)]=\"statNum\" (change)=setStat(dlStatus.value) style=\"width:140px\">\r\n                            <option *ngFor=\"let stat of ddlStatuss\" [ngValue]=\"stat\">{{stat}}</option>\r\n                     </select>\r\n                </template> \r\n               </p-column>\r\n        <p-column field=\"Address\" header=\"Address\" [colspan]=\"2\" [sortable]=\"true\" [style]=\"{'width':'10%'}\" >\r\n             <template pTemplate=\"header\" >\r\n                    <p>Address</p>                   \r\n                    <input type=\"text\" [(ngModel)]=objAddress style=\"max-width:100px;align-items:left\" (keyup)= getReport() style=\"width:220px\"/>\r\n                </template>    \r\n        </p-column>\r\n        <p-column field=\"RequestedTotal\" header=\"RequestedTotal\" [sortable]=\"true\" [filter]=\"false\" filterPlaceholder=\"Enter keyword\" [style]=\"{'width':'6%'}\">\r\n             <template pTemplate=\"header\" >\r\n                    <p>Requested : Total </p>\r\n                    <p>({{sumRequestedTotal}}) </p>\r\n                </template>    \r\n        </p-column>\r\n        <p-column field=\"PickedUpTotal\" header=\"PickedUpTotal\" [sortable]=\"true\" [filter]=\"false\" filterPlaceholder=\"Enter keyword\" [style]=\"{'width':'6%'}\" [styleClass]=\"text-right\">\r\n            <template pTemplate=\"header\" >\r\n                    <p>Picked-Up : Total </p>\r\n                    <p>({{sumPickedUpTotal}}) </p>\r\n                </template> \r\n        </p-column>\r\n        <p-column field=\"RequestedTVs\" header=\"RequestedTVs\" [sortable]=\"true\" [filter]=\"false\" filterPlaceholder=\"Enter keyword\" [style]=\"{'width':'6%'}\">\r\n            <template pTemplate=\"header\" styleClass=\"pink\"> \r\n                    <p>Requested : TVs </p>\r\n                    <p>({{sumRequestedTVs}}) </p>\r\n                </template> \r\n        </p-column>\r\n        <p-column field=\"PickedUpTVs\" header=\"PickedUpTVs\" [sortable]=\"true\" [filter]=\"false\" filterPlaceholder=\"Enter keyword\" [style]=\"{'width':'6%'}\">\r\n            <template pTemplate=\"header\" >\r\n                    <p>Picked-Up : TVs </p>\r\n                    <p>({{sumPickedUpTVs}}) </p>\r\n                </template>\r\n        </p-column>\r\n        <p-column field=\"RequestedOther\" header=\"RequestedOther\" [sortable]=\"true\" [filter]=\"false\" filterPlaceholder=\"Enter keyword\" [style]=\"{'width':'6%'}\">\r\n             <template pTemplate=\"header\" >\r\n                    <p>Requested : Other </p>\r\n                    <p>({{sumRequestedOther}}) </p>\r\n                </template>\r\n        </p-column>\r\n        <p-column field=\"PickedUpOther\" header=\"PickedUpOther\" [sortable]=\"true\" [filter]=\"false\" filterPlaceholder=\"Enter keyword\" [style]=\"{'width':'6%'}\">\r\n             <template pTemplate=\"header\" >\r\n                    <p>Picked-Up : Other </p>\r\n                    <p>({{sumPickedUpOther}}) </p>\r\n                </template>\r\n        </p-column>\r\n           </p-dataTable>\r\n    <!--<span class=\"pink\" style=\"padding: 10px; font-weight:normal;\">Records: {{dataTable.dataToRender}}  </span>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employees_employeeservice__ = __webpack_require__("../../../../../src/app/employees/employeeservice.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrimeEmployee = (function () {
    function PrimeEmployee(SRNo, AppointmentDate, DistrictName, TruckSerialNo, Equipment, Status, Address, RequestedTotal, PickedUpTotal, RequestedTVs, PickedUpTVs, RequestedOther, PickedUpOther) {
        this.SRNo = SRNo;
        this.AppointmentDate = AppointmentDate;
        this.DistrictName = DistrictName;
        this.TruckSerialNo = TruckSerialNo;
        this.Equipment = Equipment;
        this.Status = Status;
        this.Address = Address;
        this.RequestedTotal = RequestedTotal;
        this.PickedUpTotal = PickedUpTotal;
        this.RequestedTVs = RequestedTVs;
        this.PickedUpTVs = PickedUpTVs;
        this.RequestedOther = RequestedOther;
        this.PickedUpOther = PickedUpOther;
    }
    return PrimeEmployee;
}());
var PrimeReport = (function () {
    function PrimeReport(SumRequestedTotal, SumPickedUpTotal, SumRequestedTVs, SumPickedUpTVs, SumRequestedOther, SumPickedUpOther, ReportItems) {
        this.SumRequestedTotal = SumRequestedTotal;
        this.SumPickedUpTotal = SumPickedUpTotal;
        this.SumRequestedTVs = SumRequestedTVs;
        this.SumPickedUpTVs = SumPickedUpTVs;
        this.SumRequestedOther = SumRequestedOther;
        this.SumPickedUpOther = SumPickedUpOther;
        this.ReportItems = ReportItems;
    }
    return PrimeReport;
}());
var AppComponent = (function () {
    // report: Report = new PrimeReport();
    function AppComponent(employeeService) {
        this.employeeService = employeeService;
        this.employee = new PrimeEmployee();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployeesMedium(this.objSrNo, this.objAddress, this.objFromDate, this.objToDate, this.objDistrict, this.objEquipment, this.objStatus)
            .then(function (abc) {
            _this.employees = abc.ReportItems;
            _this.sumRequestedTotal = abc.SumRequestedTotal;
            _this.sumPickedUpTotal = abc.SumPickedUpTotal;
            _this.sumRequestedTVs = abc.SumRequestedTVs;
            _this.sumPickedUpTVs = abc.SumPickedUpTVs;
            _this.sumRequestedOther = abc.SumRequestedOther;
            _this.sumPickedUpOther = abc.SumPickedUpOther;
            var unique = _this.employees.map(function (a) { return a.DistrictName; });
            _this.ddlDistricts = unique.filter(_this.onlyUnique);
            _this.ddlDistricts.unshift(' ');
            unique = _this.employees.map(function (a) { return a.TruckSerialNo; });
            _this.ddlEquipments = unique.filter(_this.onlyUnique);
            _this.ddlEquipments.unshift(' ');
            unique = _this.employees.map(function (a) { return a.Status; });
            _this.ddlStatuss = unique.filter(_this.onlyUnique);
            _this.ddlStatuss.unshift(' ');
        });
    };
    AppComponent.prototype.getReport = function () {
        var _this = this;
        this.employeeService.getEmployeesMedium(this.objSrNo, this.objAddress, this.objFromDate, this.objToDate, this.objDistrict, this.objEquipment, this.objStatus)
            .then(function (abc) {
            _this.employees = abc.ReportItems;
            _this.sumRequestedTotal = abc.SumRequestedTotal;
            _this.sumPickedUpTotal = abc.SumPickedUpTotal;
            _this.sumRequestedTVs = abc.SumRequestedTVs;
            _this.sumPickedUpTVs = abc.SumPickedUpTVs;
            _this.sumRequestedOther = abc.SumRequestedOther;
            _this.sumPickedUpOther = abc.SumPickedUpOther;
        });
    };
    AppComponent.prototype.setDist = function (value) {
        this.objDistrict = value.split(' ')[1].trim();
        this.getReport();
    };
    AppComponent.prototype.setEqu = function (value) {
        this.objEquipment = value.split(' ')[1].trim();
        this.getReport();
    };
    AppComponent.prototype.setStat = function (value) {
        this.objStatus = value.substr(value.indexOf(' ') + 1);
        this.getReport();
    };
    AppComponent.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        selector: 'my-app',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__employees_employeeservice__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__employees_employeeservice__["a" /* EmployeeService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employees_employeeservice__ = __webpack_require__("../../../../../src/app/employees/employeeservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["InputTextModule"], __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"], __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__employees_employeeservice__["a" /* EmployeeService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/employees/employeeservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    // getEmployeesMedium() {
    //      return this.http.get('https://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/Dashboard/GetEndOfDayEquipmentReportAbbr?searchDate=09/26/2016')
    //                 .toPromise()
    //                 .then(res => <Employee[]> res.json().data)
    //                 .then(data => { return data; });
    //                 .catch                   
    // }
    EmployeeService.prototype.getEmployeesMedium = function (objSrNum, objAddress, objFromDate, objToDate, objDistrict, objEquipment, objStatus) {
        return this.http.get('https://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/Dashboard/GetAssignmentReport?SRNo=' + (typeof objSrNum === "undefined" ? '' : objSrNum) +
            '&FromDate=' + (typeof objFromDate === "undefined" ? '' : objFromDate) + '&ToDate=' + (typeof objToDate === "undefined" ? '' : objToDate) +
            '&District=' + (typeof objDistrict === "undefined" ? '' : objDistrict) + '&Equipment=' + (typeof objEquipment === "undefined" ? '' : objEquipment) +
            '&Status=' + (typeof objStatus === "undefined" ? '' : objStatus) + '&Address=' + (typeof objAddress === "undefined" ? '' : objAddress))
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
        //    return this.http.get('http://localhost:36186/api/Dashboard/GetAssignmentReport?SRNo='+this.objSrNum+'&FromDate=&ToDate=&District=&Equipment=&Status=&Address=')
        // .toPromise()
        // .then(this.extractData)
        // .catch(this.handleError);                
    };
    EmployeeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EmployeeService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], EmployeeService);

var _a;
//# sourceMappingURL=employeeservice.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map