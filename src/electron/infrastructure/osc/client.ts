// @ts-ignore
import osc from "osc";

import config from "../../config/osc.json";

// @ts-ignore
const client = new osc.UDPPort({ remotePort: config.port });
client.open();

export { client };
