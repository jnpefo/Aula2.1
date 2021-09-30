class MainMemory:
    def __init__(self):
        self.clean()
        self.loaded_memory = []

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        if not isinstance(index, int):
            return 0
        try:
          return self.loaded_memory[index]
        except IndexError:
            return 0

    def clean(self):
        self.loaded_memory = []


main = MainMemory()

main.load(3)

print(main.get(1))
