export = Mechanism;
/**
 * EXTERNAL `Mechanism` constructor.
 *
 * This class implements the EXTERNAL SASL mechanism.
 *
 * The EXTERNAL SASL mechanism provides support for authentication using
 * credentials established by external means.
 *
 * References:
 *  - [RFC 4422](http://tools.ietf.org/html/rfc4422)
 *
 * @api public
 */
declare function Mechanism(): void;
declare class Mechanism {
    name: string;
    clientFirst: boolean;
    /**
     * Encode a response using given credential.
     *
     * Options:
     *  - `authzid`   authorization identity (optional)
     *
     * @param {Object} cred
     * @api public
     */
    response(cred: any): any;
    /**
     * Decode a challenge issued by the server.
     *
     * @param {String} chal
     * @api public
     */
    challenge(chal: string): void;
}
