# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

# -------------------------------------------------------------------------
# This is a sample controller
# - index is the default action of any application
# - user is required for authentication and authorization
# - download is for downloading files uploaded in the db (does streaming)
# -------------------------------------------------------------------------


def index():
    return dict(message=T('Welcome to web2py!'))

def opciones():
    user = request.vars["visitor_name"]
    passw = request.vars["password"]
    try:
        if (user != None) and (passw!= None):
            db.usuario.insert(k_nomUsuario=user,n_password=passw)
            response.flash = T("Usuario registrado")
    except:
        response.flash = T("Usuario ya existe")
    return dict(player=user)

def asteroids():
    user = request.vars["usuario"]
    return dict(player=user)

def llorona():
    user = request.vars["usuario"]
    return dict(player=user)

def fastclick():
    user = request.vars["usuario"]
    return dict(player=user)

def tank():
    user = request.vars["usuario"]
    return dict(player=user)

def recomendar():
    user = request.vars["usuario"]
    juego = request.vars["juego"]
    puntaje = request.vars["oculto"]
    rs = db.executesql("select k_idJuego from juego where n_nomJuego='"+str(juego)+"'")
    idJuego = rs[0][0]
    rawrows =db.executesql("select k_nomUsuario,i_puntaje from scoreboard where k_idJuego='"+str(idJuego)+"' order by i_puntaje desc")
    
    try:
        db.scoreboard.insert(k_nomUsuario=user, k_idJuego=idJuego, i_puntaje=puntaje)
        response.flash = ("Este juego se ha jugado "+str(contar(rawrows))+" veces")
    except:
        response.flash = T("Puntaje ya registrado anteriormente")
    return dict(player=user,regs=rawrows,regs2=invertir(rawrows))


#Mis métodos!

def contar(lista):
    if(lista==()):
        return 0
    else:
        return 1 + contar(lista[1:])

def invertir(lista):
    if(lista==()):
        return ()
    else:
        return invertir(lista[1:])+lista[:1]
