# -*- coding: utf-8 -*-
db = DAL('mysql://root:123456789@localhost/juego')
db.define_table('usuario',Field('k_nomUsuario'),Field('n_password'), migrate=False)
db.define_table('juego',Field('k_idJuego','integer'),Field('n_nomJuego'), migrate = False)
db.define_table('scoreboard', Field('k_nomUsuario'), Field('k_idJuego','integer'), Field('i_puntaje','integer'), migrate = False)
