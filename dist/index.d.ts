import { Socket } from "phoenix";
type SetupRecorders = (signallingId: string) => Promise<{
    pcs: RTCPeerConnection[];
    sockets: Socket[];
}>;
export declare const setupRecorders: SetupRecorders;
export {};
//# sourceMappingURL=index.d.ts.map