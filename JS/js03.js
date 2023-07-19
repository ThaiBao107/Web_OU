function giai(){
    a = document.getElementById('item_a').value;
    b = document.getElementById('item_b').value;
    c = document.getElementById('item_c').value;
    if(a > 0) {
        dental = b**2 - (4*a*c);
        if(dental > 0)
        {
        x1 = (-b + Math.sqrt(dental)) / (2*a);
        x2 = (-b - Math.sqrt(dental)) / (2*a);
        document.getElementById("x1").innerHTML = "x1: "+ x1;
        document.getElementById("x2").innerHTML = "x2: "+ x2;
        }
        else if(dental == 0)
        {
            x1 = x2 = (-b) / (2*a);
            document.getElementById("x1").innerHTML = "x1: "+ x1;
            document.getElementById("x2").innerHTML = "x2: "+ x2;
        }
        else
        {
           alert("Khong the tinh duoc do dental be hon 0");
           location.reload();
        }
    }
    else
    {
        alert("Do a be hon a, nhap lai:")
        location.reload();
    }
}

function reset()
{
    location.reload();
}