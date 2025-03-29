module.exports = {
    global: {
        view: ''
    },
    explorer: {
        folderPath: '',
        targetFolderPath: '',
        targetFolderChild: true,

        defaultFolder_1: 'D:\\OneDrive\\[Ai Scans]',
        defaultFolder_2: 'C:\\Save PSD',
        defaultFolder_3: 'C:\\Save PNG',
        defaultFolder_4: 'D:\\MEGA\\[Ai Scans]',

        explorerMode: 'convert-mode',
        explorerLimit: true,

        renamePattern: '[Ai Scans] Shiki Chap <15> - <0+><ext>',

        renameProjectID: 1,
        renameProjectIDString: '00',
        renameChapterID: 1,
        renameChapterIDString: '001',
        renamePageID: 1,

        convertExtensionID: 0,
        convertWidthID: 1,
        convertInterpolateID: 0,
        customConvertWidth: 800,

        allowConvertExtension: [
            'PNG',
            'JPG'
        ],
        allowConvertWidth: [
            '',
            '100%'
        ],
        allowConvertInterpolate: [
            'Average',
            'Average4',
            'Average9',
            'Average16',
            'Background',
            'Bilinear',
            'Blend',
            'Catrom',
            'Integer',
            'Mesh',
            'Nearest',
            'Spline'
        ]
    },
    project: {
        project: []
    },
    google: {
        email: '',
        auth: {
            'access_token': '',
            'refresh_token': '',
            'token_type': 'Bearer',
            'expiry_date': 0
        },
        oauth2Client: {},
        client_secret: {
            'client_id': '',
            'project_id': '',
            'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
            'token_uri': 'https://accounts.google.com/o/oauth2/token',
            'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
            'client_secret': '',
            'redirect_uris': ['http://localhost:3000/auth'],
            'javascript_origins': ['http://localhost:3000']
        },
        upload: {
            status: '',
            cloudFiles: [],
            localFiles: []
        }
    }
};
