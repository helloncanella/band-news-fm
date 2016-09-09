import X2JS from '../vendors/xml2json'

/**
 * This function converts a xml string to json
 */

export default function xml2json(xml) {
    var
        x2js = new X2JS(),
        jsonObj = x2js.xml_str2json(xml);

    return jsonObj
}