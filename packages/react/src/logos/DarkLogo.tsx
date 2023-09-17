import './DarkLogo.css';

interface DarkLogoProps {
    secondary?: boolean;
    logoUrl?: string;
}

function DarkLogo(props: DarkLogoProps) {
    return (
        <div>
            <a href="https://dm3.network">
                <img
                    src={props.logoUrl}
                    className="align-self-center"
                    style={
                        props.secondary
                            ? { filter: 'opacity(0.4) grayscale(1)' }
                            : {}
                    }
                />
            </a>

            {!props.secondary && (
                <div style={{ fontSize: '18px ' }} className="text-end">
                    <span
                        className="badge bg-warning text-dark"
                        style={{ borderRadius: '4px' }}
                    >
                        beta 2
                    </span>
                </div>
            )}
        </div>
    );
}

export default DarkLogo;
