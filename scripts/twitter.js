// Deletes statistics in the twitter view
function deleteNavStats() {
  let statisticsLength = document.querySelectorAll('.ProfileNav-item').length
  for (let i = 0; i < statisticsLength - 1; ++i) {
    let element = document.querySelector('.ProfileNav-item');
    element.parentNode.removeChild(element);
  }
}

function deleteStatsList() {
  let element = document.querySelector('.ProfileCardStats-statList')
  
  if (!element) return

  element.parentNode.removeChild(element);
}

function deleteActionCounts() {
  let statistics = document.querySelectorAll('.ProfileTweet-actionCount')
  statistics.forEach(e => e.parentNode.removeChild(e))
}

function deleteMomentCapsuleLikes() {
  let statistics = document.querySelectorAll('.MomentCapsuleLikesCount')
  statistics.forEach(e => e.parentNode.removeChild(e))
}

function deleteTweetStatsContainer() {
  let statistics = document.querySelectorAll('.js-tweet-stats-container')
  statistics.forEach(e => e.parentNode.removeChild(e))
}


// Delete statistics
setInterval(deleteActionCounts, 100)
setInterval(deleteNavStats, 250)
setInterval(deleteStatsList, 100)
setInterval(deleteMomentCapsuleLikes, 250)
setInterval(deleteTweetStatsContainer, 500)