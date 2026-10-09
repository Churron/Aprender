producto = "Monitor"
precio = 150000
cantidad = 8
meta = 1000000
descuento = 20000 * cantidad

total_del_dia = precio * cantidad
total_con_descuento = total_del_dia - descuento
cumple = total_con_descuento >= meta

print("Producto: ",producto)
print("total: ",total_con_descuento)
print("cumplio? ",cumple)

