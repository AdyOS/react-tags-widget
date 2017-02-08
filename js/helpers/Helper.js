/**
 * Набор хелперов для работы
 *
 * @author aosipov
 */

/**
 * Проверяет что входной параметр является стрингой
 *
 * @param obj
 * @returns {boolean}
 */
export function isString(obj) {
    return toString.call(obj) === '[object String]';
}
