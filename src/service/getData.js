import {
  post,
  postIBP,
  postArr,
  fetch,
  patch,
  put,
  postEr
} from '../config/http'
const userUrl = "http://rsttest.vanke.com"
// const userUrl = "http://192.168.137.1:8000"
//周易
/**
 * 获取拜访详情
 */
export const getVisitorDetailById = (id) => {
  return post(userUrl + '/servers.api/visitorApi/getVisitorDetailById', "'visitorId':" + id)
}
/**
 * 获取评分列表
 */
export const getEvaluateList = (marketId, cityId, templateType) => {
  return post(userUrl + '/servers.api/evaluateApi/getEvaluateList', "'templateType':" + templateType + ",'marketId':'" + marketId + "'", "'cityId':'" + cityId + "'")
}
/**
 * 活动评价
 */
export const saveEvaluate = (cityId, marketId, evaluateTemplateId, beEvaluatedId, templateList, userName, referenceNo, referenceName, comment) => {
  return post(userUrl + '/servers.api/evaluateApi/saveEvaluate', "'evaluateTemplateId':" + evaluateTemplateId + ",'beEvaluatedId':" + beEvaluatedId + ",'evaluateType':5,'templateList':" + templateList + ",'userName':" + userName + ",'referenceNo':" + referenceNo + ",'referenceName':" + referenceName + ",'marketId':'" + marketId + "','cityId':'" + cityId + "'" + comment)
}
/**
 * 活动二维码生成Base64
 */
export const transformToBase64 = (params) => {
  return postEr(userUrl + '/servers.api/activeApi/transformToBase64', JSON.stringify(params))
}
/**
 * 查询是否有评价信息
 */
export const getEvaluateByEvaluatedId = (id, templateType) => {
  return post(userUrl + '/servers.api/evaluateApi/getEvaluateByEvaluatedId', "'beEvaluatedId':'" + id + "','templateType':'" + templateType + "'")
}
/**
 * IBP保存评价
 */
export const IBPsaveEvaluate = (id, evaluate) => {
  return postIBP(userUrl + '/ibp_app_api/propertyRepairApi/saveEvaluate', "'repairId':'" + id + "','evaluate':" + JSON.stringify(evaluate))
}
/**
 * IBP意见反馈评价
 */
export const updateComplaint = (mallId, id, evaluate) => {
  return postIBP(userUrl + '/ibp_app_api/propertyComplaintApi/updateComplaint',"'mallId':'" + mallId + "','complaintId':'" + id + "','evaluate':" + JSON.stringify(evaluate) + ",'progress':'999'")
}
/**
 * 获取调查问卷明细
 */
export const getNaireDetail = (id, userId) => {
  return post(userUrl + '/member.api/qtNaireApi/getNaireDetail', "'naireId':'" + id + "','userId':'" + userId + "'")
}
/**
 * 新增调查反馈
 */
export const addQtAnswer = (params, id, userId) => {
  return postArr(userUrl + '/member.api/qtNaireApi/addQtAnswer', JSON.stringify(params), "'naireId':'" + id + "','userId':'" + userId + "'")
}
