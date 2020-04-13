/**
 * @file mofron-event-clkfocus/index.js
 * @brief click focus event for mofron
 * ## event function parameter
 *  - component: event target component object
 *  - boolean: focus flag
 *  - mixed: user specified parameter
 * @feature this event notify when enable focus by clicking component and disable focus by clicking the other than that.
 * @attention not supported focus event by tab key
 * @license MIT
 */
const Click = require("mofron-event-click");

module.exports = class extends Click {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('ClkFocus');
            /* init config */
            this.confmng().add("clickFlag", { type: "boolean", init: false });
	    this.confmng().add("status", { type: "boolean", init: false });
	    /* set config */
	    if (undefined !== prm) {
               this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents for target component
     * 
     * @param (mofron.class.Dom) target dom object
     * @type private
     */
    contents (tgt_dom) {
        try {
            if (true === this.pointer()) {
                tgt_dom.component().style({ "cursor": "pointer" });
            }
            let evt = this;
            tgt_dom.getRawDom().addEventListener(
                'click',
                () => {
                    try {
		        evt.clickFlag(true);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
            
            let win_clk = () => {
                try {
                    if ( (true === evt.status()) &&
                         (false === evt.clickFlag()) ) {
                        evt.execListener(false);
                        evt.status(false);
                    } else if ( (false === evt.status()) &&
                                (true === evt.clickFlag()) ) {
                        evt.execListener(true);
                        evt.status(true);
                    }
                    evt.clickFlag(false);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
	    }
	    mofron.window.event(new Click(win_clk));
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
        try {
	    return this.confmng("clickFlag", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * focus status flag setter/getter
     *
     * @param (boolean) focus status flag
     *                  undefined: call as getter
     * @return (boolean) focus status flag
     * @type function
     */
    status (prm) {
        try {
	    return this.confmng("status", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
