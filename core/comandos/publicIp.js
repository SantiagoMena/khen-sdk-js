const publicIp = require('public-ip');

module.exports = async () => {
    return {
        error: false,
        data: {
            ipv4: await publicIp.v4(),
            ip6: await publicIp.v6()
        }
    };
}