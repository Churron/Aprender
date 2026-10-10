producto = "Notebooks"
precio_unitario = 650000
cantidad_vendida = 0

total_producto_vendido = precio_unitario * cantidad_vendida


if total_producto_vendido >= 3000000:
    print("Excelente")
elif total_producto_vendido >= 2000000:
    print("Bueno")
elif total_producto_vendido >= 1000000 :
    print("Regular")
else:
    print("Bajo")

print("Producto:", producto)
print("Total vendido =", total_producto_vendido)