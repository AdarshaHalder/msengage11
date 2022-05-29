async function requestExternalImage(imageUrl) {
  const res = await fetch('fetch_external_image', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ imageUrl })
  })
  if (!(res.status < 400)) {
    console.error(res.status + ' : ' + await res.text())
    throw new Error('failed to fetch image from url: ' + imageUrl)
  }

  let blob
  try {
    blob = await res.blob()
    return await faceapi.bufferToImage(blob)
  } catch (e) {
    console.error('received blob:', blob)
    console.error('error:', e)
    throw new Error('failed to load image from url: ' + imageUrl)
  }
}

function renderNavBar(navbarId, exampleUri) {
  const examples = [
    {
      uri: 'face_detection',
      name: 'Face Detection by ADARSH'
    },
    {
      uri: 'face_landmark_detection',
      name: 'Face Landmark Detection BY ADARSH'
    },
    {
      uri: 'face_expression_recognition',
      name: 'Face Expression Recognition BY ADARSH'
    },
    {
      uri: 'age_and_gender_recognition',
      name: 'Age and Gender Recognition BY ADARSH'
    },
    {
      uri: 'face_recognition',
      name: 'Face Recognition BY ADARSHA '
    },
    {
      uri: 'face_extraction',
      name: 'Face Extraction ADARSH'
    },
    {
      uri: 'video_face_tracking',
      name: 'Video Face Tracking ADARSHA'
    },
    {
      uri: 'webcam_face_detection',
      name: 'Webcam Face Detection ADARSHA'
    },
    {
      uri: 'webcam_face_landmark_detection',
      name: 'Webcam Face Landmark Detection ADARSHA'
    },
    {
      uri: 'webcam_face_expression_recognition',
      name: 'Webcam Face Expression Recognition ADARSHA'
    },
    {
      uri: 'webcam_age_and_gender_recognition',
      name: 'Webcam Age and Gender Recognition ADARSHA'
    },
    {
      uri: 'bbt_face_landmark_detection',
      name: 'BBT Face Landmark Detection ADARSHA'
    },
    {
      uri: 'bbt_face_similarity',
      name: 'BBT Face Similarity ADARSHA'
    },
    {
      uri: 'bbt_face_matching',
      name: 'BBT Face Matching ADARSHA '
    },
    {
      uri: 'bbt_face_recognition',
      name: 'BBT Face Recognition ADARSHA'
    },
    {
      uri: 'batch_face_landmarks',
      name: 'Batch Face Landmark Detection'
    },
    {
      uri: 'batch_face_recognition',
      name: 'Batch Face Recognition'
    }
  ]

  const navbar = $(navbarId).get(0)
  const pageContainer = $('.page-container').get(0)

  const header = document.createElement('h3')
  header.innerHTML = examples.find(ex => ex.uri === exampleUri).name
  pageContainer.insertBefore(header, pageContainer.children[0])

  const menuContent = document.createElement('ul')
  menuContent.id = 'slide-out'
  menuContent.classList.add('side-nav', 'fixed')
  navbar.appendChild(menuContent)

  const menuButton = document.createElement('a')
  menuButton.href='#'
  menuButton.classList.add('button-collapse', 'show-on-large')
  menuButton.setAttribute('data-activates', 'slide-out')
  const menuButtonIcon = document.createElement('img')
  menuButtonIcon.src = 'menu_icon.png'
  menuButton.appendChild(menuButtonIcon)
  navbar.appendChild(menuButton)

  const li = document.createElement('li')
  const githubLink = document.createElement('a')
  githubLink.classList.add('waves-effect', 'waves-light', 'side-by-side')
  githubLink.id = 'github-link'
  githubLink.href = 'https://github.com/AdarshaHalder/MSENGAGE2022'
  const h5 = document.createElement('h5')
  h5.innerHTML = 'ADARSHA SECURITIES'
  
  githubLink.appendChild(h5)
  const githubLinkIcon = document.createElement('img')
  githubLinkIcon.src = 'github_link_icon.png'
  githubLink.appendChild(githubLinkIcon)
  li.appendChild(githubLink)
  menuContent.appendChild(li)

  examples
    .forEach(ex => {
      const li = document.createElement('li')
      if (ex.uri === exampleUri) {
        li.style.background='#red'
      }
      const a = document.createElement('a')
      a.classList.add('waves-effect', 'waves-light', 'pad-sides-sm')
      a.href = ex.uri
      const span = document.createElement('span')
      span.innerHTML = ex.name
      span.style.whiteSpace = 'nowrap'
      a.appendChild(span)
      li.appendChild(a)
      menuContent.appendChild(li)
    })
    // document.renderNavBar.style.backgroundColor = "#E6E6FA";
  $('.button-collapse').sideNav({
    menuWidth: 230
    
  })
  document.body.style.backgroundColor = "#E6E6FA";
}

function renderSelectList(selectListId, onChange, initialValue, renderChildren) {
  const select = document.createElement('select')
  $(selectListId).get(0).appendChild(select)
  renderChildren(select)
  $(select).val(initialValue)
  $(select).on('change', (e) => onChange(e.target.value))
  $(select).material_select()
}

function renderOption(parent, text, value) {
  const option = document.createElement('option')
  option.innerHTML = text
  option.value = value
  parent.appendChild(option)
}
