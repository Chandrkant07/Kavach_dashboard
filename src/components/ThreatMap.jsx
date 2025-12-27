import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icons
const threatIcon = new L.DivIcon({
    className: 'custom-icon',
    html: `<div class="w-4 h-4 bg-red-600 rounded-full animate-ping border-2 border-white"></div>`,
    iconSize: [16, 16]
});

export default function ThreatMap({ threats }) {
    return (
        <div className="h-full w-full rounded-lg overflow-hidden border border-white/10 relative z-0">
            <MapContainer center={[28.6139, 77.2090]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; OpenStreetMap & CartoDB'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {/* Protected Zone */}
                <Circle
                    center={[28.6139, 77.2090]}
                    radius={2000}
                    pathOptions={{ color: '#00ff9d', fillColor: '#00ff9d', fillOpacity: 0.1, dashArray: '10, 10' }}
                />

                {threats && threats.map((threat, idx) => (
                    <Marker key={idx} position={threat.coordinates} icon={threatIcon}>
                        <Popup className="custom-popup">
                            <div className="bg-black text-white p-2 rounded border border-red-500">
                                <strong>{threat.id}</strong><br />
                                {threat.type}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            <div className="absolute top-4 right-4 z-[1000] bg-black/80 p-2 rounded border border-white/20 text-xs">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary"></div>
                    <span className="text-gray-300">Protected Zone</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-alert"></div>
                    <span className="text-gray-300">Hostile</span>
                </div>
            </div>
        </div>
    );
}
