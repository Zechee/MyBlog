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
import { TagsOutput } from './tags-output';
/**
 * 
 * @export
 * @interface RESTfulResultListTagsOutput
 */
export interface RESTfulResultListTagsOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListTagsOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {Array<TagsOutput>}
     * @memberof RESTfulResultListTagsOutput
     */
    data?: Array<TagsOutput> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultListTagsOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListTagsOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListTagsOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListTagsOutput
     */
    timestamp?: number;
}
