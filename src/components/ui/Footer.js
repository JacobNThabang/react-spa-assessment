export default function Footer() {
	return (
		<footer className="bg-primary-bg text-white h-[500px] px-20">
			<div className="flex flex-col">
				<div className="flex gap-5 mt-16">
					<div className="mt-2.5 h-1 w-10 bg-primary-active"></div>
					<span className="text-xl font-normal">Contact us</span>
				</div>
				<div className="mt-8 flex w-full justify-between gap-[423px]">
					<p className="flex justify-center font-bold text-4xl w-[455px]">
						Have a project in mind? Let's make it happen
					</p>
					<div className="flex flex-col justify-center h-20 text-xl font-normal">
						<p>22 Lawley Road, Woodstock, 7925,</p>
						<p>Cape Town, South Africa </p>
						<p>+27 21 469 1500 </p>
						<p className="underline">enquirie@kingjames.co.za </p>
					</div>
				</div>
				<div className="mt-32 flex w-full justify-between gap-9">
					<div>
						<ul className="text-white text-xl">
							<li className="mb-2">
								<a href="/" className="hover:underline">Terms of service</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Privacy</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Impressum</a>
							</li>
						</ul>
					</div>
					<div>
						<ul className="text-white text-xl">
							<li className="mb-2">
								<a href="/" className="hover:underline">Facebook</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Instagram</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Twitter</a>
							</li>
						</ul>
					</div>
					<div>
						<ul className="text-white text-xl">
							<li className="mb-2">
								<a href="/" className="hover:underline">Github</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Linkedin</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Teams</a>
							</li>
						</ul>
					</div>
					<div>
						<ul className="text-white text-xl">
							<li className="mb-2">
								<a href="/" className="hover:underline">Youtube</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Behance</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">Dribble</a>
							</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-col justify-between h-[110px] text-white text-xl">
							<li className="mb-2">
								<a href="/" className="hover:underline">Explore pen jobs</a>
							</li>
							<li className="mb-2">
								<a href="/" className="hover:underline">©2000—2022 King James Digital</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}