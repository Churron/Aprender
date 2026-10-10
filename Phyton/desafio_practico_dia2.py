producto = "Notebook Gamer"
precio_unitario = 800000
cantidad_vendida = 4
meta_ventas = 3000000
stock = 0

total_ventas = precio_unitario * cantidad_vendida


if total_ventas >= meta_ventas and stock > 0:
    print("Meta cumplida y producto disponible")
elif total_ventas >= meta_ventas and stock == 0:
    print("Meta cumplida, reponer stock")
elif total_ventas < meta_ventas:
    print("Meta no alcanzada")

if stock == 0:
        print("Producto agotado")