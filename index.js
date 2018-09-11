/**
 * @file mofron-event-focus/index.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class mofron.event.Focus
 * @brief focus event class for component
 */
mf.event.Focus = class extends mf.Event {
    
    constructor (po) {
        try {
            super();
            this.name('Focus');
            
            this.m_tgtclk = false;
            this.m_focus  = false;
            this.m_init   = true;
            
            this.prmMap('handler');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     */
    contents (tgt_dom) {
        try {
            let evt = this;
            tgt_dom.getRawDom().addEventListener(
                'click',
                () => {
                    try {
                        evt.m_tgtclk = true;
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
            
            if (true === this.m_init) {
                window.addEventListener(
                    'click',
                    () => {
                        try {
                            evt.focus(
                                (true === evt.m_tgtclk) ? true : false
                            );
                            evt.m_tgtclk = false;
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },
                    false 
                );
                this.m_init = false;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    focus (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_focus) ? false : this.m_focus;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            if ( ((true === flg) && (undefined === this.m_focus)) ||
                 (flg !== this.m_focus) ) {
                this.execHandler(flg);
            }
            this.m_focus  = flg;
            this.m_tgtclk = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execEffect (eff, prm) {
        try {
            for (let eidx in eff) {
                eff[eidx].execute(prm[2]);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Focus;
/* end of file */
