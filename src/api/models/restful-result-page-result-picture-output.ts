/* tslint:disable */
/* eslint-disable */
/**
 * 博客前端接口
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PageResultPictureOutput } from './page-result-picture-output';
/**
 * 
 * @export
 * @interface RESTfulResultPageResultPictureOutput
 */
export interface RESTfulResultPageResultPictureOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultPictureOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {PageResultPictureOutput}
     * @memberof RESTfulResultPageResultPictureOutput
     */
    data?: PageResultPictureOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultPageResultPictureOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultPictureOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultPictureOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultPictureOutput
     */
    timestamp?: number;
}
