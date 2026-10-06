import { SITE, withBase } from './site';

export type PoseFunityLocale = 'zh-Hans' | 'en';
export type PoseFunitySection = 'privacy' | 'support';

export function poseFunityPath(section: PoseFunitySection, locale: PoseFunityLocale): string {
  const prefix = locale === 'en' ? '/en' : '';
  return withBase(`${prefix}/${section}/posefunity/`);
}

const shared = {
  email: SITE.supportEmail,
  adDisclosureUrl: 'https://developers.google.com/admob/ios/privacy/data-disclosure',
};

export const poseFunityContent = {
  'zh-Hans': {
    lang: 'zh-Hans',
    language: '简体中文',
    alternateLanguage: 'English',
    skip: '跳到正文',
    nav: { privacy: '隐私政策', support: '支持', language: '语言' },
    privacy: {
      title: '隐私政策',
      summary: '本政策说明 PoseFunity 在提供动作捕捉与视频创作功能时如何处理信息，以及你可以如何管理相关数据。',
      effective: '生效日期：2026 年 9 月 23 日',
      contents: '本页内容',
      sections: [
        { id: 'operator', title: '运营者及适用范围', body: 'PoseFunity 由独立开发者提供。本政策适用于 PoseFunity iOS 应用及本网站的 PoseFunity 页面，说明我们处理信息的方式。你可以通过本页末尾列出的邮箱就隐私问题联系我们。' },
        { id: 'information', title: '处理的信息及用途', body: '当你使用实时捕捉、导入视频或生成作品时，应用会处理相机画面、你选择的视频、人体姿态关键点、动作数据、生成的视频及相关设置。这些信息仅用于提供姿态识别、角色预览、视频生成、项目保存与导出功能。创作素材在设备本地处理，不会上传至开发者运营的服务器。' },
        { id: 'permissions', title: '设备权限', body: '相机权限用于实时捕捉和预览；照片权限用于选择导入视频或保存生成的视频；运动与方向数据用于辅助区分设备移动和人物运动；本地网络权限用于在应用与内嵌角色预览之间传递姿态数据。使用系统“文件”选择器时，仅处理你主动选取的文件。你可以在 iOS“设置”中调整相关权限；拒绝权限可能使对应功能无法使用。' },
        { id: 'storage', title: '本地存储与保留期限', body: '项目视频、原始素材、缩略图、动作数据和生成设置保存在设备本地，通常保留至你删除项目或卸载应用。处理过程中可能产生临时文件。开发者无法直接访问保存在你设备上的项目内容。' },
        { id: 'ads', title: '广告及第三方处理', body: '应用的部分版本或地区可能展示广告。提供广告时，Google AdMob 可能处理 IP 地址、设备标识符、广告展示与互动信息，以及诊断和性能数据，用于投放、衡量和维护广告服务。具体处理范围取决于实际启用的服务、设备设置和适用地区。广告服务不会接收应用为姿态识别而处理的相机画面、导入视频或动作数据。有关 Google 的数据处理说明，请参阅下方链接。' },
        { id: 'sharing', title: '主动分享与外部副本', body: '只有当你主动导出、保存到“照片”或“文件”、使用系统分享功能，或通过邮件联系我们时，相关内容才会交给你选择的外部应用或服务。第三方服务按照其自身政策处理收到的信息。已导出或分享的副本不会因你删除应用内项目而自动删除。' },
        { id: 'security', title: '数据安全', body: '应用使用 iOS 权限机制和应用沙盒限制对创作素材的访问。请妥善保护设备、系统备份以及你导出到其他位置的文件。任何存储或传输方式都无法保证绝对安全。' },
        { id: 'children', title: '未成年人', body: 'PoseFunity 不面向未成年人定向提供服务，也不以主动收集未成年人个人信息为目的。未成年人应在监护人指导下使用本应用。' },
        { id: 'choices', title: '你的权利与选择', body: '你可以在 iOS“设置”中管理设备权限，在应用项目页删除本地项目，或卸载应用以移除其沙盒中的数据。对你主动发送的支持邮件，你可以通过下方邮箱提出访问、更正或删除等请求；我们会依据适用法律处理，必要时核实请求人的身份。' },
        { id: 'changes', title: '政策更新', body: '如果应用功能或信息处理方式发生变化，我们会更新本政策并注明新的生效日期。对于重大变更，我们会通过应用、版本说明或本页面等适当方式告知。' },
        { id: 'website', title: '网站访问与联系方式', body: '本网站通过 GitHub Pages 托管。GitHub 可能为网页交付、安全和防滥用处理 IP 地址及必要技术日志；本页面未配置独立的广告或分析脚本。隐私问题可发送邮件至 forray2023@163.com。发送邮件时，邮件服务会处理你的邮箱地址和邮件内容，我们仅将收到的信息用于回复和处理你的请求。' },
      ],
      adLink: '查看 Google Mobile Ads SDK 的数据披露',
    },
    support: {
      title: 'PoseFunity 支持',
      summary: '使用帮助、常见问题与反馈方式。',
      contactTitle: '需要帮助？写邮件给我们',
      contactBody: '请说明遇到问题的页面、操作步骤、iPhone 型号和 iOS 版本；截图有助于定位问题。请勿发送不必要的私人视频。',
      faqTitle: '常见问题',
      faqs: [
        { id: 'start', question: '怎样开始实时捕捉？', answer: '进入实时页面，允许相机权限，让一位人物完整地出现在画面中。光线充足、身体无遮挡时，姿态识别通常更稳定。' },
        { id: 'import', question: '如何导入已有视频？', answer: '在导入页面从“照片”或“文件”选取本地视频，选择片段并开始生成。当前识别流程面向单人画面。' },
        { id: 'permissions', question: '为什么需要相机、照片、运动和本地网络权限？', answer: '相机用于实时捕捉；照片用于选择或保存视频；运动数据帮助区分手机与人物运动；本地网络用于向内嵌 Unity 预览传递姿态数据。你可以在 iOS“设置”中调整权限。' },
        { id: 'generation', question: '生成失败或角色没有跟随怎么办？', answer: '先确认画面中只有一人、人物全身可见且光线充足；尝试缩短导入片段并重新生成。若角色预览没有就绪，可重启 App 后重试。' },
        { id: 'projects', question: '在哪里找回或删除作品？', answer: '生成后的内容会出现在项目页。可从项目中导出、保存或删除；保存到系统“照片”或“文件”的副本需要在对应位置单独管理。' },
        { id: 'ads', question: '为什么会看到广告？', answer: 'App 可能在启动或生成页面展示广告，具体取决于地区和广告配置。广告相关数据处理见隐私政策。' },
      ],
      privacyTitle: '隐私与数据',
      privacyBody: '查看创作素材、设备权限和广告服务的处理说明。',
      privacyAction: '阅读隐私政策',
    },
    footer: 'PoseFunity · 动作捕捉与角色创作',
    ...shared,
  },
  en: {
    lang: 'en',
    language: 'English',
    alternateLanguage: '简体中文',
    skip: 'Skip to content',
    nav: { privacy: 'Privacy Policy', support: 'Support', language: 'Language' },
    privacy: {
      title: 'Privacy Policy',
      summary: 'This policy explains how PoseFunity handles information when providing motion capture and video creation features, and how you can manage your data.',
      effective: 'Effective September 23, 2026',
      contents: 'On this page',
      sections: [
        { id: 'operator', title: 'Operator and scope', body: 'PoseFunity is provided by an independent developer. This policy applies to the PoseFunity iOS app and the PoseFunity pages on this website. It describes how information is handled. You may contact us about privacy using the email address at the end of this policy.' },
        { id: 'information', title: 'Information processed and purposes', body: 'When you use live capture, import video, or create a project, the app processes camera footage, videos you select, body landmarks, motion data, generated videos, and related settings. This information is used to provide pose detection, avatar preview, video creation, project storage, and export. Creative media is processed on your device and is not uploaded to a developer-operated server.' },
        { id: 'permissions', title: 'Device permissions', body: 'Camera access supports live capture and preview. Photos access lets you choose imported videos or save generated videos. Motion and orientation data helps separate device movement from body movement. Local network access transfers pose data between the app and its embedded avatar preview. Files selected with the system picker are processed only after you select them. You can change permissions in iOS Settings; denying access may limit the relevant feature.' },
        { id: 'storage', title: 'Local storage and retention', body: 'Project videos, source media, thumbnails, motion data, and generation settings are stored on your device, generally until you delete a project or uninstall the app. Temporary files may be created during processing. The developer cannot directly access projects stored on your device.' },
        { id: 'ads', title: 'Advertising and third-party processing', body: 'Some app versions or regions may display ads. When ads are served, Google AdMob may process IP addresses, device identifiers, ad impressions and interactions, and diagnostic and performance data for ad delivery, measurement, and service maintenance. The scope depends on the services actually enabled, device settings, and region. The ad service does not receive camera footage, imported videos, or motion data processed for pose detection. See the link below for Google’s data disclosure.' },
        { id: 'sharing', title: 'Sharing you initiate and external copies', body: 'Information is passed to an external app or service when you choose to export, save to Photos or Files, use the system share sheet, or email us. Those services handle received information under their own policies. Copies you export or share are not deleted automatically when you delete an in-app project.' },
        { id: 'security', title: 'Data security', body: 'The app uses iOS permissions and its app sandbox to limit access to creative media. Protect your device, system backups, and files exported elsewhere. No method of storage or transmission can be guaranteed to be completely secure.' },
        { id: 'children', title: 'Children', body: 'PoseFunity is not directed at children and does not aim to actively collect children’s personal information. Minors should use the app with guidance from a parent or guardian.' },
        { id: 'choices', title: 'Your rights and choices', body: 'You can manage device permissions in iOS Settings, delete local projects from the Projects page, or uninstall the app to remove its sandbox data. For support emails you choose to send, you may request access, correction, or deletion through the email address below. We will handle requests under applicable law and may need to verify your identity.' },
        { id: 'changes', title: 'Changes to this policy', body: 'If app features or information practices change, we will update this policy and its effective date. Significant changes will be communicated through the app, release notes, this page, or another appropriate channel.' },
        { id: 'website', title: 'Website access and contact', body: 'This website is hosted on GitHub Pages. GitHub may process IP addresses and necessary technical logs to deliver and protect the site. These pages do not include separate ad or analytics scripts. For privacy questions, email forray2023@163.com. Your email service processes the address and content you send, and we use received information only to respond to and handle your request.' },
      ],
      adLink: 'Read Google Mobile Ads SDK data disclosure',
    },
    support: {
      title: 'PoseFunity Support',
      summary: 'How-to guidance, common questions, and a way to send feedback.',
      contactTitle: 'Need help? Email us',
      contactBody: 'Include the screen where the issue occurred, steps to reproduce, your iPhone model, and iOS version. A screenshot may help. Please avoid sending private videos unless necessary.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { id: 'start', question: 'How do I start live capture?', answer: 'Open the live capture screen and allow camera access. Keep one person fully visible. Good lighting and an unobstructed body usually improve pose detection.' },
        { id: 'import', question: 'How do I import an existing video?', answer: 'Choose a local video from Photos or Files on the Import screen, select a segment, and start generation. The current detection flow is designed for one person.' },
        { id: 'permissions', question: 'Why does the app request camera, Photos, motion, and local network access?', answer: 'Camera supports live capture; Photos lets you select or save videos; motion data separates phone movement from body movement; local network access passes pose data to the embedded Unity preview. Change permissions in iOS Settings.' },
        { id: 'generation', question: 'What if generation fails or the avatar does not move?', answer: 'Use footage with one fully visible person and good lighting. Try a shorter imported segment. If the avatar preview is not ready, restart the app and try again.' },
        { id: 'projects', question: 'Where can I find or delete my creations?', answer: 'Generated content appears on the Projects page. You can export, save, or delete it there. Manage copies saved to Photos or Files in those apps separately.' },
        { id: 'ads', question: 'Why do I see ads?', answer: 'The app may show ads at launch or on generation screens, depending on region and configuration. See the privacy policy for ad data practices.' },
      ],
      privacyTitle: 'Privacy and data',
      privacyBody: 'Learn about creative media, device permissions, and ad services.',
      privacyAction: 'Read the privacy policy',
    },
    footer: 'PoseFunity · Motion capture and avatar creation',
    ...shared,
  },
} as const;
