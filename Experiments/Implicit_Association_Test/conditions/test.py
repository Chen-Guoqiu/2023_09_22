from pathlib import Path
import pandas as pd

for file in Path().iterdir():
    if file.suffix == '.xlsx':
        df = pd.read_excel(file)
        df.to_excel(file, index=False)