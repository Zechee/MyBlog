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
import { CategoryOutput } from './category-output';
/**
 * 
 * @export
 * @interface RESTfulResultListCategoryOutput
 */
export interface RESTfulResultListCategoryOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListCategoryOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {Array<CategoryOutput>}
     * @memberof RESTfulResultListCategoryOutput
     */
    data?: Array<CategoryOutput> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultListCategoryOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListCategoryOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListCategoryOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListCategoryOutput
     */
    timestamp?: number;
}
