webpackHotUpdate(16,{

/***/ "./src/main/webapp/app/biblio/biblio.service.ts":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/biblio/biblio.service.ts ***!
  \******************************************************/
/*! exports provided: BiblioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BiblioService\", function() { return BiblioService; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js\");\n/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ \"./src/main/webapp/app/app.constants.ts\");\n/* harmony import */ var _shared_util_request_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/util/request-util */ \"./src/main/webapp/app/shared/util/request-util.ts\");\n\n\n\n\n\n\nclass BiblioService {\n    constructor(http) {\n        this.http = http;\n        this.resourceUrl = _app_constants__WEBPACK_IMPORTED_MODULE_2__[\"SERVER_API_URL\"] + 'api/livres';\n        this.resourceUrlTitre = _app_constants__WEBPACK_IMPORTED_MODULE_2__[\"SERVER_API_URL\"] + 'api/livres_by_titre';\n        this.resourceUrlTheme = _app_constants__WEBPACK_IMPORTED_MODULE_2__[\"SERVER_API_URL\"] + 'api/livre_byTheme?theme';\n        this.resourceUrlAuteur = _app_constants__WEBPACK_IMPORTED_MODULE_2__[\"SERVER_API_URL\"] + 'api/livre_by_auteur?auteur';\n    }\n    create(livre) {\n        return this.http.post(this.resourceUrl, livre, { observe: 'response' });\n    }\n    update(livre) {\n        return this.http.put(this.resourceUrl, livre, { observe: 'response' });\n    }\n    parTitre(titre) {\n        return this.http.get(`${this.resourceUrlTitre}/${titre}`, { observe: 'response' });\n    }\n    query(req) {\n        const options = Object(_shared_util_request_util__WEBPACK_IMPORTED_MODULE_3__[\"createRequestOption\"])(req);\n        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });\n    }\n    parTheme(theme) {\n        const options = Object(_shared_util_request_util__WEBPACK_IMPORTED_MODULE_3__[\"createRequestOption\"])(theme);\n        return this.http.get(`${this.resourceUrlTheme}=${theme}`, { params: options, observe: 'response' });\n    }\n    parAuteur(auteur) {\n        const options = Object(_shared_util_request_util__WEBPACK_IMPORTED_MODULE_3__[\"createRequestOption\"])(auteur);\n        return this.http.get(`${this.resourceUrlAuteur}=${auteur}`, { params: options, observe: 'response' });\n    }\n    delete(id) {\n        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });\n    }\n}\nBiblioService.ɵfac = function BiblioService_Factory(t) { return new (t || BiblioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵinject\"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"])); };\nBiblioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjectable\"]({ token: BiblioService, factory: BiblioService.ɵfac, providedIn: 'root' });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](BiblioService, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Injectable\"],\n        args: [{ providedIn: 'root' }]\n    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2JpYmxpby9iaWJsaW8uc2VydmljZS50cz8xZDAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNxQjtBQUdkO0FBQ2dCOzs7QUFPM0QsTUFBTSxhQUFhO0lBTXhCLFlBQXNCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFML0IsZ0JBQVcsR0FBRyw2REFBYyxHQUFHLFlBQVksQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyw2REFBYyxHQUFHLHFCQUFxQixDQUFDO1FBQzFELHFCQUFnQixHQUFHLDZEQUFjLEdBQUcseUJBQXlCLENBQUM7UUFDOUQsc0JBQWlCLEdBQUcsNkRBQWMsR0FBRyw0QkFBNEIsQ0FBQztJQUVoQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFTO1FBQ2IsTUFBTSxPQUFPLEdBQUcscUZBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsTUFBTSxPQUFPLEdBQUcscUZBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLE1BQU0sT0FBTyxHQUFHLHFGQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCxNQUFNLENBQUMsRUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7MEVBckNVLGFBQWE7Z0dBQWIsYUFBYSxXQUFiLGFBQWEsbUJBREEsTUFBTTs2RkFDbkIsYUFBYTtjQUR6Qix3REFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmlibGlvL2JpYmxpby5zZXJ2aWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTRVJWRVJfQVBJX1VSTCB9IGZyb20gJy4uL2FwcC5jb25zdGFudHMnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiB9IGZyb20gJy4uL3NoYXJlZC91dGlsL3JlcXVlc3QtdXRpbCc7XG5pbXBvcnQgeyBJTGl2cmUgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWwvbGl2cmUubW9kZWwnO1xuXG50eXBlIEVudGl0eVJlc3BvbnNlVHlwZSA9IEh0dHBSZXNwb25zZTxJTGl2cmU+O1xudHlwZSBFbnRpdHlBcnJheVJlc3BvbnNlVHlwZSA9IEh0dHBSZXNwb25zZTxJTGl2cmVbXT47XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQmlibGlvU2VydmljZSB7XG4gIHB1YmxpYyByZXNvdXJjZVVybCA9IFNFUlZFUl9BUElfVVJMICsgJ2FwaS9saXZyZXMnO1xuICBwdWJsaWMgcmVzb3VyY2VVcmxUaXRyZSA9IFNFUlZFUl9BUElfVVJMICsgJ2FwaS9saXZyZXNfYnlfdGl0cmUnO1xuICBwdWJsaWMgcmVzb3VyY2VVcmxUaGVtZSA9IFNFUlZFUl9BUElfVVJMICsgJ2FwaS9saXZyZV9ieVRoZW1lP3RoZW1lJztcbiAgcHVibGljIHJlc291cmNlVXJsQXV0ZXVyID0gU0VSVkVSX0FQSV9VUkwgKyAnYXBpL2xpdnJlX2J5X2F1dGV1cj9hdXRldXInO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGNyZWF0ZShsaXZyZTogSUxpdnJlKTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8SUxpdnJlPih0aGlzLnJlc291cmNlVXJsLCBsaXZyZSwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICB9XG5cbiAgdXBkYXRlKGxpdnJlOiBJTGl2cmUpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PElMaXZyZT4odGhpcy5yZXNvdXJjZVVybCwgbGl2cmUsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgfVxuXG4gIHBhclRpdHJlKHRpdHJlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0eVJlc3BvbnNlVHlwZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElMaXZyZT4oYCR7dGhpcy5yZXNvdXJjZVVybFRpdHJlfS8ke3RpdHJlfWAsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgfVxuXG4gIHF1ZXJ5KHJlcT86IGFueSk6IE9ic2VydmFibGU8RW50aXR5QXJyYXlSZXNwb25zZVR5cGU+IHtcbiAgICBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElMaXZyZVtdPih0aGlzLnJlc291cmNlVXJsLCB7IHBhcmFtczogb3B0aW9ucywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgfVxuXG4gIHBhclRoZW1lKHRoZW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0eUFycmF5UmVzcG9uc2VUeXBlPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNyZWF0ZVJlcXVlc3RPcHRpb24odGhlbWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElMaXZyZVtdPihgJHt0aGlzLnJlc291cmNlVXJsVGhlbWV9PSR7dGhlbWV9YCwgeyBwYXJhbXM6IG9wdGlvbnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gIH1cblxuICBwYXJBdXRldXIoYXV0ZXVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVudGl0eUFycmF5UmVzcG9uc2VUeXBlPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNyZWF0ZVJlcXVlc3RPcHRpb24oYXV0ZXVyKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJTGl2cmVbXT4oYCR7dGhpcy5yZXNvdXJjZVVybEF1dGV1cn09JHthdXRldXJ9YCwgeyBwYXJhbXM6IG9wdGlvbnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gIH1cblxuICBkZWxldGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHt9Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/biblio/biblio.service.ts\n");

/***/ })

})