/**
 * JSONデータからHTMLのディレクトリツリーを再帰的に生成する関数
 * @param {object} node - 現在のノードデータ（ディレクトリまたはファイル）
 * @returns {HTMLElement} - 生成された <li> 要素
 */
function createTreeNode(node) {
  // 1. ノードを表す <li> 要素を作成
  const listItem = document.createElement('li');
  
  // 2. ノード名とタイプ（アイコン）を表示
  let icon = '';
  if (node.type === 'directory') {
    icon = '📁 '; // フォルダアイコン
    listItem.classList.add('directory');
  } else {
    icon = '📄 '; // ファイルアイコン
    listItem.classList.add('file');
  }
  
  // <li> のテキストを設定
  listItem.textContent = icon + node.name;

  // 3. 子要素（children）がある場合、再帰的に処理
  if (node.children && node.children.length > 0) {
    // 子要素を格納する <ul> 要素を作成
    const ul = document.createElement('ul');
    
    // 全ての子ノードに対して再帰的に createTreeNode を呼び出す
    node.children.forEach(child => {
      const childItem = createTreeNode(child);
      ul.appendChild(childItem);
    });
    
    // <li> の下に <ul> を追加して階層を形成
    listItem.appendChild(ul);
  }

  return listItem;
}

/**
 * ツリー全体の生成を開始し、HTMLに追加する関数
 * @param {object} data - ルートノードを含むJSONデータ
 * @param {string} targetId - ツリーを追加するHTML要素のID
 */
function renderDirectoryTree(data, targetId) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    console.error(`Target element with ID '${targetId}' not found.`);
    return;
  }
  
  // ルートノードの <li> 要素を取得 (通常はルートノード自体は表示しないことが多いが、ここでは表示)
  const rootListItem = createTreeNode(data);

  // ツリー全体を格納するメインの <ul> を作成し、ルートノードの children のみを入れることが多い
  // 今回はルートノードの <li> を直接追加
  const mainUl = document.createElement('ul');
  
  // ルート要素（"root"）の children のみを処理して表示する場合
  if (data.children && data.children.length > 0) {
      data.children.forEach(child => {
          mainUl.appendChild(createTreeNode(child));
      });
  }
  
  targetElement.appendChild(mainUl);
}