let w,c,wc;
do
{
    w = Number(prompt("Ширина екрану = "));
}while(w<0 || isNaN(w));

do
{ 
    c = Number(prompt("Кількість елементів = "));
}while(c<0 || isNaN(c));

wc = w / c;
alert("Ширина елементів,які повинні бути відображені в рядку:" + wc);