module.exports = {
	PID: 'A00',

	NAV_COLOR: '#ffffff',
	NAV_BG: '#20A746',

	MEET_NAME: '活动',

	MENU_ITEM: ['首页', '活动日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=学校概况,2=教育教学,3=学院学科,4=科学研究,5=招生就业,6=学生天地,7=合作交流',
	MEET_TYPE: '1=学术讲座报名|leftbig2,2=校园活动报名|leftbig3',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}