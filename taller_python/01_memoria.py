#1 TIPOS INMUTABLES#
x = 10
print(f"direccion de memoria de x:{id(x)}")

y = x
print(f"direccion de memoria de y:{id(y)}")

x = x + 1
print(f"Nueva direccion de memoria x tras sumarle 1: {id(x)}")
print(f"Direccion de memoria: {id(y)}")