/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Path = require('path');
const Fs = require('fs-extra');

/**
 * Internal Utility class for Caliper
 */
class Util {

    /**
     * Perform a sleep
     * @param {*} ms the time to sleep, in ms
     * @returns {Promise} a completed promise
     */
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Simple log method to output to the console
     * @param {any} msg messages to log
     */
    static log(...msg) {
        // eslint-disable-next-line no-console
        console.log(...msg);
    }

    static createDataDump(label, data) {
        try {
            console.log('Creating datadump');
            const filename = `${label.toLowerCase()}-${new Date(Date.now()).toISOString()}.json`.replace(/[^0-9a-z-.]/gi, '-');
            const path = Path.join(Path.sep, 'caliper', 'data', 'dumps', filename);
            Fs.outputJsonSync(path, data);
            console.log('Created datadump:', filename);
        }
        catch (e) {
            throw new Error('Unable to create datadump:'+ label+ '. Reason:'+ e);
        }
    }
}

module.exports = Util;