/**
 * Created by anuraagbasu on 21/04/16.
 */

module.exports = {
    // Server IP
    ip:       process.env.OPENSHIFT_NODEJS_IP ||
    process.env.IP ||
    undefined,

    // Server port
    port:     process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.PORT ||
    8000
};