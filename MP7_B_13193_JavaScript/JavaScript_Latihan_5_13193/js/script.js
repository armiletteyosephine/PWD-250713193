function fn_ValForm() {
    var sMsg ="";
    var sInfo ="";
    var sPilihan ="";

    var inama = document.getElementById("nama").value;
    var eEmail = document.getElementById("email").value;
    var iumur = document.getElementById("umur").value;
    var validasiEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var paket = document.getElementById("kategori").value;

    if (inama == "") {
        sMsg += "Nama Belum Diisi";
    }
    if (eEmail == "") {
        sMsg += "Email Belum Diisi";
    }else{
        if (!validasiEmail.test(email)) {
            sMsg = "Format email tidak valid";
        }
    }

    if (umur == "") {
        sMsg += "Umur Belum Diisi";
    }else{
        if (isNaN(umur)) {
            sMsg = "Umur harus berupa angka";
        }
    }else{
        var umur= perseInt(umur);
        if(umur>65){
            sMsg += "Umur Harus Diantara 17 - 65 tahun";
        }else if(umur >= 17){
            if(umur>25){
                sInfo="Paket Umum";
            }else{
                sInfo="Paket Pelajar";
            }
        }else{
            sMsg += "Umur harus diantara 17 - 65 tahun";
        }
    }

    if(paket){
        case "S":
            sPilihan="Silver";
            break;
        case "G":
            sPilihan="Gold";
            break;
        case "P":
            sPilihan="Platinum";
            break;
    }

    alert("Terima kasih" +inama+ "!Anda terdaftar di paket" +paket+ "("+sInfo+")");
    return true;
}
