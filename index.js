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

module.exports = class extends mofron.class.Event {
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
	    this.confmng().add("focusSts", { type: "boolean", init: false });
	    this.confmng().add("pointer", { type: "boolean", init:true });
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
     * @param (mf.Dom) target dom object
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
                            evt.execListener(false);
                            evt.focusSts(false);
                        } else if ( (false === evt.focusSts()) &&
                                    (true === evt.clickFlag()) ) {
                            evt.execListener(true);
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
        try {
	    return this.confmng("clickFlag", prm);
	} catch (e) {
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
        try {
	    return this.confmng("focusSts", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * cursor pointer flag
     *
     * @param (boolean) true: set pointer cursor to target component.
     *                  false: not set cursor to targeet component.
     * @return (boolean) cursor pointer flag
     * @type parameter
     */
    pointer (prm) {
        try {
	    return this.confmng("pointer", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
