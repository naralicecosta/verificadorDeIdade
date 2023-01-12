function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[ERRO] verifique os dados e tente novamente') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.getElementById('foto')


        if (fsex[0].checked) {
            gênero = 'homem'

            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'menino-bebe.png.jpg'

            } else if (idade < 21){
                //jovem
                img.src = 'homem-jovem.png.jpg'
            } else if (idade < 50){
                //adulto
                img.src = 'homem-adulto.png.jpg'
            }else{
                //idoso
                img.src = 'homem-idoso.png.jpg'
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'menina-bebe.png.jpg'
            } else if (idade < 21){
                //jovem
                img.src = 'mulher-jovem.png.jpg'
            } else if (idade < 50){
                //adulto
                img.src = 'mulher-adulta.png.jpg'
            }else{
                //idoso
                img.src = 'mulher-idosa.png.jpg'
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}