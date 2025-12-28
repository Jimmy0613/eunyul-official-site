function copyText(target) {
    let targetMsg = '';
    switch (target) {
        case 'telephone':
            targetMsg = '전화번호';
            break;
        case 'fax':
            targetMsg = 'FAX 번호';
            break;
        case 'road-name-address':
            targetMsg = '도로명주소';
            break;
        case 'address':
            targetMsg = '지번주소';
            break;
        case 'zip-code':
            targetMsg = '우편번호';
            break;

    }
    
    const targetText = document.getElementById(target).innerText;

    // 클립보드 복사 실행
    navigator.clipboard.writeText(targetText).then(() => {
        showToast(`${targetMsg}가 복사되었습니다!`);
    }).catch(error => {
        showToast('복사에 실패했습니다.');
    });
}

// 토스트 실행 함수
function showToast(message) {
    const toast = document.getElementById('toast-container');
    toast.innerText = message;
    toast.classList.add('show');

    // 2초 뒤 사라짐
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}