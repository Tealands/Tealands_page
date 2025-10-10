import json

# 読み込みファイルと書き込みファイルのパス
input_path = r'c:\Users\hachi\OneDrive\Desktop\todos.json'
output_path = r'c:\Users\hachi\OneDrive\Desktop\todos_deduped.json'

# JSONファイルを読み込む
with open(input_path, encoding='utf-8') as f:
    todos = json.load(f)

# 重複排除用セットと結果リスト
seen = set()
result = []

for item in todos:
    # 各項目をタプル化して比較
    key = tuple(sorted(item.items()))
    if key not in seen:
        seen.add(key)
        result.append(item)

# 重複排除後のリストを書き出す
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print(f"重複排除後のデータを {output_path} に保存しました。")