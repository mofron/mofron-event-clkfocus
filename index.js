/**
 * @file mofron-event-focus/index.js
 * @author simpart
 */

/**
 * @class mofron.event.Focus
 * @brief focus event class for component
 */
mofron.event.Focus = class extends mofron.Event {
    
    constructor (fnc, prm) {
        try {
            super();
            this.name('Focus');
            
            this.m_tgtclk = false;
            this.m_focus  = false;
            
            if ('object' === fnc) {
                this.prmOpt(fnc);
            } else {
                this.handler(fnc, prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     */
    eventConts (tgt_dom) {
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
            let evt_func = this.handler();
            if ( ((true === flg) && (undefined === this.m_focus)) ||
                 (flg !== this.m_focus) ) {
                this.m_focus = flg;
                if (null != evt_func[0]) {
                    evt_func[0](flg, this.target(), evt_func[1]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.event.focus = {};
module.exports = mofron.event.Focus;
