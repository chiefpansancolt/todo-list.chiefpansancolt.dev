import { ImageResponse } from "next/og";

export const alt = "Todo List Desktop App - Task Management Made Simple";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const Image = () =>
	new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontFamily: "sans-serif",
					position: "relative",
				}}
			>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)",
					}}
				/>
				<div
					style={{
						color: "white",
						fontSize: 72,
						fontWeight: 800,
						letterSpacing: "-1px",
						marginBottom: 20,
						textAlign: "center",
					}}
				>
					Todo List Desktop App
				</div>
				<div
					style={{
						color: "rgba(255,255,255,0.85)",
						fontSize: 32,
						fontWeight: 400,
					}}
				>
					Task Management Made Simple
				</div>
			</div>
		),
		{ ...size }
	);

export default Image;
