/**
 * @file mofron-event-clkfocus/index.js
 * @brief click focus event for mofron
 * @feature enable focus by clicking component and disable focus by clicking the other than that.
 * @attention not supported focus event by tab key
 * @author simpart
 */
const mf = require('mofron');

mf.event.ClkFocus = class extends mf.Event {
    /**
     * initialize event
     * 
     * @param (mixed) event prameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('ClkFocus');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents for target component
     * 
     * @param (mf.Dom) target dom object
     * @type private
     */
    contents (tgt_dom) {
        try {
            let evt = this;
            tgt_dom.getRawDom().addEventListener(
                'click',
                () => {
                    try { evt.clickFlag(true); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
            
            window.addEventListener(
                'click',
                () => {
                    try {
                        if ( (true === evt.focusSts()) &&
                             (false === evt.clickFlag()) ) {
                            evt.execHandler(false);
                            evt.focusSts(false);
                        } else if ( (false === evt.focusSts()) &&
                                    (true === evt.clickFlag()) ) {
                            evt.execHandler(true);
                            evt.focusSts(true);
                        }
                        evt.clickFlag(false);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false 
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * flag for target clicked
     *
     * @param (boolean) click flag
     * @return (boolean) click flag
     * @type private
     */
    clickFlag (prm) {
        try { return this.member("clickFlag", "boolean", prm, false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * focus status flag
     *
     * @param (boolean) focus status flag
     * @return (boolean) focus status flag
     * @type private
     */
    focusSts (prm) {
        try { return this.member("focusSts", "boolean", prm, false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.ClkFocus;
/* end of file */
