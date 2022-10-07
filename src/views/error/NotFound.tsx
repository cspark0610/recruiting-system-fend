import { useTranslation } from 'react-i18next'
import Header from '../../components/header/Header'

const NotFound = () => {
	/*  */
	const { t } = useTranslation()

	return (
		<div>
			<Header
				width="laptop:w-[97.5px] mobile:w-[113px] tablet:w-[154px]"
				height="laptop:h-[65px] mobile:h-[75px] tablet:h-[102px]"
			/>
			<div className="grid justify-items-center mt-10">
				<section className="grid justify-items-center gap-20 grid-rows-1 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2">
					<div>
						<img
							src={
								process.env.PUBLIC_URL +
								`/images/Ilustration.svg`
							}
							alt="Page Not Found"
							className="mobile:hidden tablet:block laptop:block"
						/>
					</div>
					<div>
						<img
							src={
								process.env.PUBLIC_URL +
								`/images/404 Error.svg`
							}
							alt="404 page not found"
							className="w-60 md:w-full bg-white"
						/>
						<div className="font-raleway text-gray-color font-normal text-base tracking-wide bg-white mobile:my-5 laptop:my-0">
							<p className="mb-4">
								{t('404.line_1.p1')} <br />{' '}
								{t('404.line_1.p2')}
							</p>
							<p>
								{t('404.line_2.p1')} <br />{' '}
								{t('404.line_2.p2')}
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default NotFound
