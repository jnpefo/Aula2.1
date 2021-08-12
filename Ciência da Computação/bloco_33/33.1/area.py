PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius

print("Área do quadrado:", square(10))
print("Área do retângulo:", rectangle(2, 2))
print("Área do círculo:", circle(3))

import area

PEOPLE_AT_CONCERT_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 240  # em metros
FIELD_WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = area.rectangle(FIELD_LENGTH, FIELD_WIDTH) // PEOPLE_AT_CONCERT_PER_SQUARE_METER

if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
