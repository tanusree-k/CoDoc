
export function setupSharing() {
  // ── Share ───────────────────────────────────────────────────────────────
window.openShareModal = function() {
  const canInvite = myRole === 'owner' || myRole === 'editor';
  const roleGroup = document.querySelector('.share-role-group');
  const genBtn = document.getElementById('generate-link-btn');
  const desc = document.querySelector('#share-modal p');
  if (roleGroup) roleGroup.style.display = canInvite ? '' : 'none';
  if (genBtn) genBtn.style.display = canInvite ? '' : 'none';
  if (desc) desc.textContent = canInvite
    ? 'Choose a permission level and copy the link to share.'
    : 'Copy this link to share the document with others.';
  document.getElementById('share-modal').classList.remove('hidden');
  window.generateShareLink();
};
window.closeShareModal = function() { document.getElementById('share-modal').classList.add('hidden'); };
window.generateShareLink = function() {
  const canInvite = myRole === 'owner' || myRole === 'editor';
  let link;
  if (canInvite) {
    const roleOpt = document.querySelector('input[name="share-role"]:checked');
    const role = roleOpt ? roleOpt.value : 'viewer';
    link = window.location.origin + '/editor.html?doc=' + docId + '&invite=' + btoa(role);
  } else {
    link = window.location.origin + '/editor.html?doc=' + docId;
  }
  document.getElementById('share-link-input').value = link;
};
window.copyShareLink = function() {
  const linkInput = document.getElementById('share-link-input');
  navigator.clipboard.writeText(linkInput.value).catch(() => { linkInput.select(); document.execCommand('copy'); });
  showToast('🔗 Link copied to clipboard!', '#10b981');
};

document.querySelectorAll('input[name="share-role"]').forEach(el => {
  el.addEventListener('change', window.generateShareLink);
});
document.getElementById('share-btn')?.addEventListener('click', window.openShareModal);



}
