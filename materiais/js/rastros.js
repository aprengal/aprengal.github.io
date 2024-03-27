"use strict";
( () => {

    function el( e, s ) {
        return e.querySelector( s );
    }

    function grup( e, s ) {
        return e.querySelectorAll( s );
    }

    //0 Variables comúns
    var doc = document;

    //2. Comprobación para ver se hai menú
    if ( el( doc, '.tel-b' ) ) {
        var doc = document,
            tel_b = el( doc, '.tel-b' ),
            tel_b_list = tel_b.classList,
            m_t = el( doc, '.m-t' ),
            m_t_list = m_t.classList,
            men = el( doc, '.menu-p' ),
            men_a = grup( men, 'a' );

        //2.1 Apertura e peche do menú con escape
        function menu_tel() {

            if ( window.innerWidth < 1024 ) {

                if ( !m_t_list.contains( 'si' ) && !m_t_list.contains( 'act' ) ) {

                    m_t_list.add( 'si' );

                    //Tempo engadido para evitar que o menú apareza de golpe
                    setTimeout( () => {
                        m_t_list.add( 'act');
                        tel_b_list.add( 'activo' );
                        aria_exp( tel_b, true );
                    }, 50);

                } else if ( m_t_list.contains( 'si' ) && m_t_list.contains( 'act' ) ) {

                    m_t_list.remove( 'act' );
                    tel_b_list.remove( 'activo' );
                    aria_exp( tel_b, false );

                    //Este tempo coincide cos ms que tarda en aparecer o menú para evitar que desaparezca de golpe
                    setTimeout( () => {
                        m_t_list.remove( 'si' );
                        if ( pan ) { focus_faragullas( false ) };
                    }, 375);
                }
            }

        }
        
        tel_b.addEventListener( 'click', () => menu_tel() );

        doc.addEventListener( 'keydown', ( p ) => {

            if ( p.key === 'Escape' && window.innerWidth < 1024 ) {
                p.preventDefault();
                menu_tel();

                //50ms de espera para que se engada a clase act
                setTimeout( () => {
                    if ( m_t_list.contains( 'act' ) ) {
                        men_a[0].focus();
                    } else {
                        tel_b.focus();
                    }
                }, 50);
            }

        });

    }

})();
